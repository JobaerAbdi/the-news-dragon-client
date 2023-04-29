import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsam iusto odio ipsum nesciunt eveniet modi, maiores praesentium porro architecto ad, dolor fuga. Saepe in animi consequatur voluptate dignissimos error nihil! Ratione, sit earum aspernatur odio magni blanditiis? Neque quam sed pariatur quisquam inventore laudantium laborum minima aperiam rerum? Minima, enim. Hic officia minus perferendis quae consequuntur? Error adipisci cum qui atque nemo ut, magnam esse eveniet! Asperiores atque sed, delectus recusandae illo iste ut vel deleniti magnam. Assumenda commodi cumque totam saepe, vitae, libero voluptatem praesentium odio nulla dolorum architecto iusto rem minima blanditiis adipisci laudantium. Laboriosam, inventore unde?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;