import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import ProductCard from '../components/UI/product.card/ProductCard';
import '../styles/allFoods.css';
import '../styles/pagination.css';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getFoods } from '../store/features/foodSlice';

const AllFoods = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const dispatch = useDispatch();

    const { foods, loading } = useSelector((state) => ({ ...state.food }));
    useEffect(() => {
        dispatch(getFoods());
    }, [dispatch]);

    if (loading) {
        return <div className='text-center my-5'>
            <Button variant="danger" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    };


    const searchedProduct = foods.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }
    });
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
    const pageCount = Math.ceil(searchedProduct.length / productPerPage);
    const changePage = ({ selected }) => { setPageNumber(selected) };

    return (
        <Helmet title='All-Foods'>
            <CommonSection title='All Foods' />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className="search_widget d-flex align-items-center justify-content-between">
                                <input
                                    type="text"
                                    placeholder="I'm looking for..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="6" xs="12" className='mb-5'>
                            <div className="sorting_widget text-end">
                                <select className='w-50'>
                                    <option>Default</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>

                        {
                            displayPage.map(item => (
                                <Col lg="3" md="4" sm="6" xs="6" key={item._id} className="mb-4">
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }

                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel="Previous"
                                nextLabel="Next"
                                containerClassName="paginationBtns"
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AllFoods;