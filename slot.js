class slot {
    #slot;

    constructor(start,end) {
        this.#slot = [start, end]
    }


    get start() {
        return this.#slot[0]
    }
    get end() {
        return this.#slot[1]
    }
}


class Slots {

    #slots;

    constructor() {
        this.#slots = [];
    }


    add(slot){

        if(this.isAvailable(slot.start, slot.end))
        {
            this.#slots.push(slot);
        }
    }

    isAvailable(start,end)
    {
        for(let slot of this.#slots)
        {
if(start <slot.end && end > slot.start) 
{
 return false;
    
    }}
    return true;
}



listSlot() {
    for(let slot of this.#slots)
    {
        console.log('Start: ${slot.start} - End: ${slot.end}');
    }
}



}
const s1 = new Slots(1,3);
const s2 = new Slots(3,4);
const s3 = new Slots(2,5);

const s = new Slots();

s.add(s1);
s.add(s2);
s.add(s3);

s.listSlot();

