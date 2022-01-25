import PropTypes from "prop-types";

export default function FormError({ children }:any) {
	return <div className="form-error">{children}</div>;
}

FormError.propTypes = {
	children: PropTypes.node.isRequired,
};
