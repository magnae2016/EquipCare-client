import { Link } from 'react-router-dom'
import './index.css'

function SlideboxMenu() {
    return (
        <div className="sch_tab sc">
            <div className="sch_tab_inner">
                <div className="api_list_scroll_wrap">
                    <ul className="api_list_scroll" role="tablist">
                        <li className="bx" role="presentation">
                            <Link to="/" role="tab">
                                <span className="m">정보</span>
                            </Link>
                        </li>
                        <li className="bx" role="presentation">
                            <Link to="/" role="tab">
                                <span className="m">알람</span>
                            </Link>
                        </li>
                        <li className="bx" role="presentation">
                            <Link to="/" role="tab">
                                <span className="m">MTBI</span>
                            </Link>
                        </li>
                        <li className="bx" role="presentation">
                            <Link to="/" role="tab">
                                <span className="m">분석 데이터</span>
                            </Link>
                        </li>
                        <li className="bx" role="presentation">
                            <Link to="/" role="tab">
                                <span className="m">제품 분석</span>
                            </Link>
                        </li>
                        <li className="bx" role="presentation">
                            <Link to="/" role="tab">
                                <span className="m">간트 차트</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SlideboxMenu
