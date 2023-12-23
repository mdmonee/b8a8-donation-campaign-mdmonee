import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Detail = () => {
    const [detail, setDetail] = useState();
    const { id } = useParams();
    const details = useLoaderData();

    useEffect(() => {
        const findDetail = details?.find((detail) => detail.id == id);
        setDetail(findDetail);
    }, [id, details]);

    return (
        <div>
            <DetailsCard details={detail} id={id} />
        </div>
    );
};

export default Detail;
