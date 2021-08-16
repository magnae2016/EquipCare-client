import React from 'react'
import './index.css'

function TableBox(params) {
    return (
        <div className="table_box">
            <div className="table_title">
                <h3>장비별 알람 수</h3>
                <div className="sort_tab">
                    <div className="sub_option_area">
                        <a
                            className="sub_option"
                            aria-selected="true"
                            role="option"
                        >
                            장비명
                        </a>
                        <a
                            className="sub_option"
                            aria-selected="false"
                            role="option"
                        >
                            내림차순
                        </a>
                    </div>
                </div>
            </div>
            <div className="table_content">
                <div className="table_header">
                    <table>
                        <caption>투표율제목</caption>
                        <tbody>
                            <tr>
                                <th>지역</th>
                            </tr>
                            <tr>
                                <th>투표율</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table_body">
                    <div className="inner">
                        <div className="api_list_scroll">
                            <table>
                                <caption>투표율</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">전남</th>
                                        <th scope="col">제주</th>
                                        <th scope="col">경남</th>
                                        <th scope="col">전북</th>
                                        <th scope="col">울산</th>
                                        <th scope="col">경북</th>
                                        <th scope="col">강원</th>
                                        <th scope="col">세종</th>
                                        <th scope="col">서울</th>
                                        <th scope="col">충북</th>
                                        <th scope="col">광주</th>
                                        <th scope="col">부산</th>
                                        <th scope="col">충남</th>
                                        <th scope="col">대전</th>
                                        <th scope="col">경기</th>
                                        <th scope="col">대구</th>
                                        <th scope="col">인천</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="highest">69.2%</td>
                                        <td>65.9%</td>
                                        <td>65.8%</td>
                                        <td>65.2%</td>
                                        <td>64.8%</td>
                                        <td>64.7%</td>
                                        <td>63.2%</td>
                                        <td>61.7%</td>
                                        <td>59.9%</td>
                                        <td>59.3%</td>
                                        <td>59.2%</td>
                                        <td>58.8%</td>
                                        <td>58.1%</td>
                                        <td>58.0%</td>
                                        <td>57.8%</td>
                                        <td>57.3%</td>
                                        <td className="lowest">55.3%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableBox
