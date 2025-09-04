export function getNextCycle(currentCycle: number){
return currentCycle ===0 || currentCycle=== 8 ? 1 : currentCycle + 1;
// se currentCycle for 0 ou 8 ele vai ser 1 que vai se do tipo "workTime" se nao ele vai somar mais um e ser outro tipo
}