let boxId = 0;

const createBox = ({ title, subtitle }) => ({
    title,
    subtitle,
    boxId: boxId++,
    titleButtons: [
        {
           alt: "back arrow",
           img: "../assets/svg/back.svg"
        },
        {
           alt: "dice",
           img: "../assets/svg/dice.svg" 
        }
    ]
});

export default createBox;