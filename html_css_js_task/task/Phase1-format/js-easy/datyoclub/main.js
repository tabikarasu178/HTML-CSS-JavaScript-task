let cntPerson = 0;

const cntUp = () => {
    cntPerson += 1;
    console.log(cntPerson);
};

const reply = () => {
    const str = 'どうぞどうぞ';
    const action = str.repeat(cntPerson);
    alert(action);
    cntPerson = 0;
};
