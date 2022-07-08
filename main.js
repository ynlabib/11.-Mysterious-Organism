// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate () {
      let newSpecimenNum = 0;
      do{
      newSpecimenNum = returnRandBase();
      this.specimenNum = newSpecimenNum;
      } while (this.specimenNum = newSpecimenNum);
      return specimenNum;
      },
    compareDNA(pAequorObj) {
      let similarity = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (pAequorObj.dna[i] === this.dna[i])
        similarity++;
      } return console.log('Specimen ' + this.specimenNum + 'and specimen ' + pAequorObj.specimenNum + 'are ' + (similarity*100/this.dna.length) + '% similar'); 
    },
     willLikelySurvive () {
       let survival = 0;
       for (let i = 0; i < this.dna.length; i++) {
         if (this.dna[i] === 'C' || this.dna[i] === 'G') {
           survival++
         }
       } return (survival/this.dna.length > 0.6)
     }
  }
} 

let i = 0;
let j = 0;
let pAequorGenerator = [];
let pAequors = []; 
while (i < 30){
  pAequorGenerator[j] = pAequorFactory(j, mockUpStrand());
  if (pAequorGenerator[j].willLikelySurvive()) {
    pAequors[i] = pAequorGenerator[j];
    i++;
  }
}

console.log(pAequors);