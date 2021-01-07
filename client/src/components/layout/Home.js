import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPostHome } from "../../actions/postActions";
import HomeBlog from '../user/HomeBlog';


export let post;

const Home = ({ getPostHome, posts }) => {

    useEffect(() => {
        getPostHome();
    }, [getPostHome])
    post = posts;
   
    return <HomeBlog posts={posts}/>;
};

const mapStateToProps = state => ({
    posts: state.post.posts
})


Home.propTypes = {
    posts: PropTypes.array.isRequired,
    getPostHome: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps, { getPostHome }
)(Home);