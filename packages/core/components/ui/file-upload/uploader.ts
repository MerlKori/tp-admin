// interface IOptions {
//   disabled?: boolean
//   accept?: string
// }

// interface IValidation {
//   rule: number
//   value: string
// }

// const VALIDATION_RULES = {
//   equil: 1,
//   startsWith: 2,
//   endsWith: 3
// }

// function getFormatInfo (format: string): IValidation {
//   const value = format.trim()
//   if (format.endsWith('/*')) return {
//     rule: VALIDATION_RULES.startsWith,
//     value: value.replace('/*', '')
//   }

//   if (format.startsWith('.')) return {
//     rule: VALIDATION_RULES.endsWith,
//     value: value.replace('.', '')
//   }

//   return {
//     rule: VALIDATION_RULES.equil,
//     value
//   }
// }

// function parseAcceptFormats (acceptFormats: string): Array<IValidation> {
//   if (!acceptFormats) return []
//   return acceptFormats
//     .split(',')
//     .map(getFormatInfo)
// }

// function isValid (acceptFormats: Array<IValidation>, file: File) {
//   return acceptFormats.some((format: IValidation) => {
//     switch (format.rule) {
//       case VALIDATION_RULES.startsWith:
//         return file.type.startsWith(format.value)
//       case VALIDATION_RULES.endsWith:
//         return file.name.endsWith(format.value)
//       case VALIDATION_RULES.equil:
//         return file.type === format.value
//       default: return false
//     }
//   })
// }

// export function useUploader (options: IOptions) {
//   // const emit = defineEmits(['change'])

//   // function upload (files) {
//   //   if (!options.accept) return files
//   //   const acceptFormats = parseAcceptFormats(options.accept)

//   // }

// }
