declare namespace cocoSsd {
  interface Detection {
    bbox: [number, number, number, number]; // [x, y, width, height]
    class: string;
    score: number;
  }

  interface ObjectDetection {
    detect(
      img: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageData,
      maxNumBoxes?: number,
      minScore?: number
    ): Promise<Detection[]>;
  }
}

declare module '@tensorflow-models/coco-ssd' {
  export function load(config?: {
    base?: 'lite_mobilenet_v2' | 'mobilenet_v2' | 'mobilenet_v1';
  }): Promise<cocoSsd.ObjectDetection>;
}

interface Window {
  requestAnimationFrame: (callback: FrameRequestCallback) => number;
  cancelAnimationFrame: (handle: number) => void;
}

interface Element {
  requestFullscreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface HTMLCanvasElement {
  getContext(contextId: '2d', options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
  getContext(contextId: 'webgl', options?: WebGLContextAttributes): WebGLRenderingContext | null;
  getContext(contextId: 'webgl2', options?: WebGLContextAttributes): WebGL2RenderingContext | null;
} 