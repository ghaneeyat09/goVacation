const Menu = ({classname}) => {
    return(
        <div id="menu" className={classname}>
            <ul>
                <li>flights</li>
                <li>hotel</li>
                <li>flights + hotel</li>
                <li>self catering</li>
                <li>continental</li>
                <li>hot deals</li>
                <li>vacation</li>
                <li>places</li>
                <li>blog</li>
            </ul>
        </div>
    )
}

export default Menu;