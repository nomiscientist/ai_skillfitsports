"use client"

import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

// Global model instance to avoid reloading
let cachedModel: cocoSsd.ObjectDetection | null = null;

/**
 * Load and cache the COCO-SSD model
 * @returns Promise that resolves to the model instance
 */
export async function loadPlayerDetectionModel(): Promise<cocoSsd.ObjectDetection> {
  try {
    // If model is already loaded, return it
    if (cachedModel) {
      return cachedModel;
    }

    console.log('Loading TensorFlow.js runtime...');
    await tf.ready();
    
    console.log('Loading COCO-SSD model...');
    // Use the lite model for better performance in browser
    const model = await cocoSsd.load({
      base: 'lite_mobilenet_v2'
    });
    
    // Cache the model
    cachedModel = model;
    console.log('COCO-SSD model loaded successfully');
    
    return model;
  } catch (error) {
    console.error('Failed to load COCO-SSD model:', error);
    throw new Error('Failed to load player detection model');
  }
}

/**
 * Filter detections to only show people
 * @param detections The raw detections from the model
 * @returns Filtered array containing only person detections
 */
export function filterPlayerDetections(detections: cocoSsd.Detection[]): cocoSsd.Detection[] {
  return detections.filter(detection => detection.class === 'person');
}

/**
 * Calculate the center point of a detection box
 * @param bbox Bounding box in format [x, y, width, height]
 * @returns Center point coordinates {x, y}
 */
export function getDetectionCenter(bbox: [number, number, number, number]): { x: number, y: number } {
  return {
    x: bbox[0] + bbox[2] / 2,
    y: bbox[1] + bbox[3] / 2
  };
}

/**
 * Convert a raw detection to a tracked player object
 */
export function createPlayerFromDetection(detection: cocoSsd.Detection, id: string, color: string) {
  const { bbox, score } = detection;
  const center = getDetectionCenter(bbox);
  
  return {
    id,
    box: {
      left: bbox[0],
      top: bbox[1],
      width: bbox[2],
      height: bbox[3]
    },
    score,
    color,
    positions: [{ 
      x: center.x, 
      y: center.y, 
      timestamp: Date.now() 
    }]
  };
} 