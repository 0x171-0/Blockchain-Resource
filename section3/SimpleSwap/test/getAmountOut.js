// const k = 10 ** 18
// const sum = 100000000
// const amount = [1]
// while (amount.length < sum) {
//     amount.push(amount.length + 1)
// }
// amount.forEach(a => {
//     const b = _getAmountOut1(a, Math.sqrt(k), Math.sqrt(k))
//     const c = _getAmountOut2(a, Math.sqrt(k), Math.sqrt(k))
//     const d = _getAmountOut3(a, Math.sqrt(k), Math.sqrt(k))
//     if (b != d) {
//         console.group(`When k = ${k}, amount= ${a}:`)
//         console.log("❌")
//         console.log("1️⃣", b, ", k=", (Math.sqrt(k) + a) * (Math.sqrt(k) - b))
//         console.log("2️⃣", c, ", k=", (Math.sqrt(k) + a) * (Math.sqrt(k) - c))
//         console.log("3️⃣", d, ", k=", (Math.sqrt(k) + a) * (Math.sqrt(k) - d))
//         console.groupEnd(`When k = ${k}, amount= ${a}:`)
//     }
// })

// function _getAmountOut1(amountIn, reserveInput, reserveOutput) {
//     return Math.floor((amountIn * reserveOutput) / (reserveInput + amountIn))
// }

// function _getAmountOut2(amountIn, reserveInput, reserveOutput) {
//     const oldK = reserveInput * reserveOutput
//     const newReserveInput = reserveInput + amountIn
//     const newReserveOutput = Math.floor(oldK / newReserveInput)
//     return reserveOutput - newReserveOutput
// }

// function _getAmountOut3(amountIn, reserveInput, reserveOutput) {
//     const oldK = reserveInput * reserveOutput
//     const newReserveInput = reserveInput + amountIn
//     // @dev (newReserveInput - 1) if for round to 1
//     const newReserveOutput = Math.floor((oldK + (newReserveInput - 1)) / newReserveInput)
//     return reserveOutput - newReserveOutput
// }
