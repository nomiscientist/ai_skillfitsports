export function NewProjectSteps() {
  return (
    <div className="relative mb-8">
      <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-muted"></div>
      <ol className="relative z-10 flex justify-between">
        <li className="flex items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">1</div>
          <span className="absolute mt-10 text-sm font-medium">Upload</span>
        </li>
        <li className="flex items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">2</div>
          <span className="absolute mt-10 text-sm font-medium text-muted-foreground">Player Selection</span>
        </li>
        <li className="flex items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">3</div>
          <span className="absolute mt-10 text-sm font-medium text-muted-foreground">Settings</span>
        </li>
        <li className="flex items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">4</div>
          <span className="absolute mt-10 text-sm font-medium text-muted-foreground">Generate</span>
        </li>
      </ol>
    </div>
  )
}
