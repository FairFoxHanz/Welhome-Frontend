import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../../actions';
import { fetchAllProperties } from '../../actions/';
import parseProperty from '../../helpers/property_parser'

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand mb-0 h1" to="/">Welhome</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className={isActiveNavBar('/properties/new')} to="/properties/new">Dodaj</Link>
                    <Link className={isActiveNavBar('/properties/browse')} to="/properties/browse">Szukaj</Link>
                    <Link className={isActiveNavBar('/properties/details')} to="/properties/details">testik</Link>
                </div>
            </div>
        </nav>
    )
}

function isActiveNavBar(url) {
    return window.location.href.includes(url) ? 'nav-item active nav-link' : 'nav-item nav-link';
}