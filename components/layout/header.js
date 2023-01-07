import React from 'react'

export default function Header(props) {
    return (
        <header className="masthead">
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-8 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{props.title}</h1>
                            <h3>{props.postTitle}</h3>
                            <span className="subheading">{props.subTitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
