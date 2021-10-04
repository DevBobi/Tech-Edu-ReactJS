import { Row } from 'react-bootstrap';
import FeaturedCourse from '../components/FeaturedCourse/FeaturedCourse';
import useFeatured from '../Hooks/useFeatured';

const Featured = () => {
    const [featured] = useFeatured();
    const newFeatured = featured.slice(4, 7);
    return (
        <>
            <div className="container my-5 py-3 ">
                <div className="pb-3">
                    <h1 className="mb-5">Featured Courses</h1>

                    <Row xs={1} md={3} className="g-4">
                        {
                            newFeatured.map((course, key) => (
                                <FeaturedCourse course={course} key={key}></FeaturedCourse>
                            ))
                        }
                    </Row>
                </div>
            </div>

        </>
    );
};

export default Featured;