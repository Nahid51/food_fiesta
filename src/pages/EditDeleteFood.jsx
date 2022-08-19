import React, { useEffect } from 'react';
import { Container, Button, Table, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodsByUser } from '../store/features/foodSlice';
import EditDeleteCard from './EditDeleteCard';

const EditDeleteFood = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state.auth }));
    const { userFoods, loading } = useSelector((state) => ({ ...state.food }));

    const userEmail = user?.result?.email;
    useEffect(() => {
        if (userEmail) {
            dispatch(getFoodsByUser(userEmail))
        }
    }, [userEmail, dispatch]);

    if (loading) {
        return <div className='text-center'>
            <Button className='text-center' variant="danger" disabled>
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

    return (
        <div>
            <Container>
                {userFoods.length === 0 ?
                    <h5 className='text-center my-5'>No food added by {userEmail}</h5>
                    :
                    <Table bordered hover responsive className='my-3'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userFoods.map((foods) => (
                                <EditDeleteCard
                                    key={foods._id}
                                    foods={foods}
                                ></EditDeleteCard>
                            ))}
                        </tbody>
                    </Table>
                }
            </Container>
        </div>
    );
};

export default EditDeleteFood;