export function Connexion() {
    const btn = {
        width: '10rem',
        minHeight: '3rem',
        margin: '1rem',
        padding: '.5rem',
        borderRadius: '.3rem',
        fontSize: '1.5rem',
        textAlign: 'center',
    }
return (
    <div>
        <button style={btn} className={`bg-[#e3f0f0a6] border-[2px] border-[#eef0f0c2] `} >Connexion</button>
        <button style={btn} className={` text-white bg-blue-500`}>S'inscrire</button>
    </div>
)
}