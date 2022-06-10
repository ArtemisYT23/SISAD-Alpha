import { ManagTypeContainer } from "../../../../../Styles/Managment";
import AsideTypeFile from "../../../ModernManagment/TypeContainer/AsideTypeFile";
import ContentTypeFile from "../../../ModernManagment/TypeContainer/ContentTypeFile";

const TypeFileConfig = () => {
    return(
        <ManagTypeContainer>
            <AsideTypeFile />
            <ContentTypeFile />
        </ManagTypeContainer>
    );
}

export default TypeFileConfig;