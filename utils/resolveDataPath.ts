type TEntryDataRow = {
  [key: string | number]: unknown
}

type TEntryData = Array<TEntryDataRow> | TEntryDataRow

export function $resolveDataPath (obj: TEntryData, path: string) {
  const pathParts = path.split('.')
  const target = pathParts
    .splice(0, pathParts.length - 1)
    .reduce((data: any, key: any) => {
      data = data[key]
      if (!data) throw new Error(`resolvePath error: invalid path ${path}`)
      return data
    }, obj)

  return {
    target,
    key: pathParts.at(-1)
  }
}