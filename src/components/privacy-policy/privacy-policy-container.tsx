import { connect } from "react-redux";
import PrivacyPolicy from "./privacy-policy";


/**
 * defines the state properties
 * @param state defines the state when customer settings is initialized
 */
const mapStateToProps = state => {
  return {
  };
};

/**
 * define the dispatch actions
 * @param dispatch the actions to be dispatched
 */
const mapDispatchToProps = dispatch => {
  return {
  };
};

/**
 * container for layout
 */
export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);
