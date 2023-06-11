import React from 'react';
import useInstructors from '../../hooks/useInstructors';

const Instructors = () => {
    const [instructor, , refetch] = useInstructors()
    console.log(instructor)
    return (
        <div className='grid gap-6 lg:mt-52 grid-cols-4 mb-20 lg:mb-52'>
            {
                instructor.map(data =>
                    <div key={data._id} className=" card w-96 bg-base-100 shadow-xl">

                        <div className="mt-5 avatar flex justify-center">
                            <div className="w-24 rounded-full">
                                <img src={data.photo} />
                            </div>
                        </div>
                        <div className="card-body mb-5">
                            <h2 className="card-title">{data.name}</h2>
                            <p>Email: {data.email}</p>
                            
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Instructors;