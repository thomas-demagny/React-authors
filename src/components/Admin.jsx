// eslint-disable-next-line no-unused-vars
import React from "react";
import { useHistory} from 'react-router-dom';

function Admin() {

    const history = useHistory;

    return(
        <React.Fragment>
            <h1 className="text-center pb-4"> Admin des auteurs </h1>
            <div className="container text-left">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores assumenda beatae commodi
                    earum enim eum expedita fuga, itaque libero maiores modi officia quam qui quibusdam quod ratione
                    sapiente. Ea!
                </div>
                <div>Architecto, esse in? Ab ad aliquam animi consequuntur cumque doloremque dolores dolorum eum
                    excepturi hic illo illum in incidunt itaque iusto maxime modi neque provident quos sit tempora,
                    voluptas voluptatum!
                </div>
                <div>Atque commodi distinctio, dolor ducimus esse eveniet expedita, id illo illum iste magnam mollitia
                    omnis, perspiciatis provident quis ratione tenetur totam vel veniam veritatis? Amet consectetur
                    obcaecati officiis perferendis quo?
                </div>
            </div>

            <button className="btn btn-info fa fa-angle-double-left align-left" onClick={ () => history.push('/')}> Retour à l'accueil</button>
        </React.Fragment>
    )
}

export default Admin;