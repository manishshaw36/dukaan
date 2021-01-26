import verifiedIconSrc from '../../assets/svg/icons_verify.svg';
import "./header.style.scss";

interface Props {
    storeName: string
}

export default function Header({ storeName }: Props) {
    return (
        <div className="dukaan-header">
          <h5 className="m-0 font-GalanoGrotesqueMedium">
            {storeName}
            <span className="ml-2">
              <img src={verifiedIconSrc} alt="Verified icon"/>
            </span>
          </h5>
          <div className="how-to-use-box cursor-pointer">
            <div className="how-to-use-icon">
                ?
            </div>
            <p className="how-to-use-text">
                How to use
            </p>
          </div>
        </div>
    )
}