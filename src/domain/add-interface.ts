export interface AddI {
  stageFile: (path: string) => boolean
  stagedFiles: () => void
}