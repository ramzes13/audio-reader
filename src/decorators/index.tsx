// function autoBind(milliseconds: number = 0) {

//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;

//     descriptor.value = function () {
//       setTimeout(() => {
//         originalMethod.apply(this, arguments);
//       }, milliseconds);
//     };

//     return descriptor;
//   }

// }

export default {

}
