// Ici on défini les constantes et les variables avec les valeurs de la source et de la destination de la feuille excell
const srcValues =
[
  [ 'id1', 'va1', 'vb1', '' ],
  [ 'id2', 'va2', 'vb2', '' ],
  [ 'id3', 'va3', 'vb3', '' ],
  [ 'id4', 'va4', 'vb4', '' ],
  [ 'id5', 'va5', 'vb5', '' ]
]

const dstValues =
[
  [ '', 'id5', '', '' ],
  [ '', 'id1', '', '' ],
  [ '', 'id2', '', '' ]
]

/**
 *! J'ai utilisé reduce pour reconstruire les donnnées qui étaient dans la source
 *TODO: Tu peux faire un console.table(srcObj) pour voir sous forme de tableau la donnée reconstitué
 */
const srcObj  = srcValues.reduce((acc, currentValue) => {
const [ ID ,data1,data2, status] = currentValue
acc[ID] = {ID ,data1, data2, status}
return acc
}, {})

/**
 * Soit tu mets la valeur setStatus après le putValues et tu décommentes le code
 * Soit tu fais ainsi, les deux méthodes sont valides
 */
const setStatus = []

/**
 *! J'ai utilisé flatMap pour mettre à jour les données dans la destination
 *TODO: Tu peux faire un console.table(putValues) pour voir le resultat
 */
const putValues = dstValues.flatMap((currentValue) => {
const [, ID] = currentValue
if(srcObj[ID]){
const values = [ new Date().toLocaleString(), ID, srcObj[ID].data1, srcObj[ID].data2]
setStatus.push(ID)
return [values]
}
})

// const setStatus = []

// for(const [key, values] of Object.entries(srcObj)){
//   const {ID, status} = values
//   if(status == 'copied') {
//     setStatus.push(ID)
//   }
// }
console.table(setStatus)

/**
 * Pour le reste de l'exercice si tu n'arrives pas à faire le code pour mettre à jour directement dans le fichier excell, fais moi signe on va faire ensemble
 */
