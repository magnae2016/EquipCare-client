import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function FormTotalSearch({
    query,
    onChange,
    onClickClearInput,
    onClickInput,
    hasFocus,
}) {
    const textInput = useRef(null)

    useEffect(() => {
        if (hasFocus) textInput.current.focus()
    }, [])

    return (
        <div id="sch" className="sch">
            <section>
                <div className="sch_wrap">
                    <div className="sch_inner">
                        <div className="sch_logo">
                            <Link to="/" className="sch_logo_nepes">
                                <span className="sch_ico_mask"></span>
                            </Link>
                        </div>
                        <Link to="/" className="sch_btn_back"></Link>
                        <form action="/equipment">
                            <div className="sch_input_wrap">
                                <input
                                    id="query"
                                    type="search"
                                    name="q"
                                    value={query}
                                    ref={textInput}
                                    onClick={onClickInput}
                                    onChange={(e) => onChange(e.target.value)}
                                    title="검색어를 입력해주세요."
                                    placeholder="검색어를 입력해주세요."
                                    className="sch_input"
                                    autoComplete="off"
                                />
                                {query.length > 0 && (
                                    <button
                                        id="clear_input"
                                        type="button"
                                        onClick={() => {
                                            onClickClearInput()
                                            textInput.current.focus()
                                        }}
                                        className="sch_btn_reset"
                                    ></button>
                                )}
                            </div>
                            <button className="sch_btn_search">
                                <span className="sch_ico_mask"></span>
                            </button>
                            <div className="sch_region"></div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormTotalSearch
