import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../../actions';
import { fetchAllProperties } from '../../actions/';
import parseProperty from '../../helpers/property_parser'

export default () => {
    const currentUrl = window.location.href;
    console.log(currentUrl.includes('/properties/browse'));
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Welhome</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={isActiveNavBar('/properties/new')}>
                        <a className="nav-link" href="/properties/new">Dodaj</a>
                    </li>
                    <li className={isActiveNavBar('/properties/browse')}>
                        <a className="nav-link" href="/properties/browse">Szukaj</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function isActiveNavBar(url) {
    return window.location.href.includes(url) ? 'nav-item active' : 'nav-item';
}