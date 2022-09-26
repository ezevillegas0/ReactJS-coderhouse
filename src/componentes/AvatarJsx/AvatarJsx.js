import './AvatarJsx.css'

const AvatarJsx = ({ color, component, id}) => {

    //const { color, component} = props

    const src = `https://randomuser.me/api/portraits/lego/${id}.jpg`

    return (
        <div className="contenedorPicture">
            <picture style={{color: color}}>
              <img src={src}  alt='avatar'/>

              {component}
            </picture>
        </div>

    )
}

export default AvatarJsx