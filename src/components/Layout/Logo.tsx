import { useDispatch } from "react-redux";
import {useNavigate} from "react-router";

import { setCurrentPage, setShowMenu } from "../../store/menuSlice";

const Logo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return <button className="flex items-center" onClick={(): void => {
		navigate("/");
		dispatch(setCurrentPage('Home'));
		dispatch(setShowMenu(false));
	}}>
		<img src="/kretostan-logo.png" alt="Kretostan logo" width={170} />
	</button>
};

export default Logo;