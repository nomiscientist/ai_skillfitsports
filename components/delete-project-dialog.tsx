"use client"

interface DeleteProjectDialogProps {
  onConfirm: () => void
  onCancel: () => void
}

export function DeleteProjectDialog({ onConfirm, onCancel }: DeleteProjectDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#111827] border border-[#1e293b] rounded-md p-6 max-w-md w-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-red-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
          </div>
          <div className="text-lg font-medium">Are you sure you want to delete this project?</div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button className="px-4 py-2 rounded-md bg-[#1e293b] text-white hover:bg-[#334155]" onClick={onCancel}>
            no
          </button>
          <button className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600" onClick={onConfirm}>
            yes
          </button>
        </div>
      </div>
    </div>
  )
}
