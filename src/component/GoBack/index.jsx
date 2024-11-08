import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { IoIosArrowBack } from 'react-icons/io';
function GoBack() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Button type="primary" className="w-35 bg-cyan-900  ml-auto self-end hover:!bg-cyan-700" onClick={handleClick}>
            <IoIosArrowBack />
            Quay lai
        </Button>
    );
}

export default GoBack;
