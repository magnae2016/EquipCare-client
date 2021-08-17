import React from 'react'
import './index.css'
import Header from '@/components/templates/Header'

function Item({ keyword, subword }) {
    return (
        <li className="type_date">
            <a className="kwd">
                <span className="fix">
                    <span className="common_ico_kwd">
                        <i className="imsc ico_search"></i>
                    </span>
                    {keyword}
                </span>
            </a>
            <em className="date">
                <span>{subword}개 항목</span>
            </em>
            {/* <a role="button" className="bt_del">
                <span className="imsc">삭제</span>
            </a> */}
        </li>
    )
}

function Search({ suggest }) {
    const List = suggest
    return (
        <div className="sch_focus">
            <Header></Header>
            <div className="u_atcp_wrap">
                <div className="nx_suggest_recent">
                    <div className="sggt_fixer">
                        <div className="sggt_header">
                            <h2 className="tit">
                                <span className="tit_inner">최근 검색어</span>
                            </h2>
                            <div className="option">
                                <a className="item">전체삭제</a>
                            </div>
                        </div>
                        <div className="sggt_container">
                            <ul className="kwd_lst">
                                {List.map((element, index) => (
                                    <Item
                                        key={index}
                                        keyword={element.EVENT_NAME}
                                        subword={element.COUNT}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="sggt_footer">
                            <span className="rside_opt_area">
                                <span className="opt_close">
                                    <a className="nx_suggest_recent_close">
                                        닫기
                                    </a>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
