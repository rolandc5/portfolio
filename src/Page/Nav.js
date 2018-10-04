import React, { Component } from 'react';
import './Global.css';

import * as Pages from '.';

export default class Nav extends Component {
    constructor (props) {
        super(props);
        this.state = {
            jumped: [0, 3, 6],
            page: 1,
            prevprevPage: 0,
            animation: 1,
        }
    }

    handleJump = (page) => {
    let jumped = 0;
    console.log(page);
    let prevPage = this.state.page;
    if (page === 1) {
        if (prevPage === 3 || (prevPage === 2 && this.state.prevprevPage === 3)) { 
        jumped = [1, 4, 6];
        }
        else {
        jumped = [1, 3, 6];
        }
    }

    if (page === 2) {
        if (prevPage === 3) {
        jumped = [2, 4, 6];
        }
        else {
        jumped = [2, 3, 6]
        }
    }

    if (page === 3) {
        jumped = [2, 5, 6];
    }
    //about = static 0, enter 1, leave 2
    //portfolio = static 3, enter 4, leave 5
    //contact = static 6, enter 7, leave 8
        this.setState({ page: page, jumped: jumped, prevprevPage: prevPage, animation: 0 }, () => {
        });
    }

    handleWheel = (e) => {
        let page = this.state.page;
        let y = e.deltaY;
        if (this.state.animation === 1) {
            if (y > 0) {
                if (this.state.page === 3) {
                    return;
                }
                page++;
                this.handleJump(page);
            }
            if (y < 0) {
                if (this.state.page === 1) {
                    return;
                }
                page--;
                this.handleJump(page);
            }
        }
    }

	handleAnimationEnd = (e) => {
        if (Math.round(e.elapsedTime) === 1) {
            this.setState({ animation: Math.round(e.elapsedTime) });
        }
	}

    render() {
        return (
            <div className='m-container' onWheel={ e => this.handleWheel(e) } onAnimationEnd={ e => this.handleAnimationEnd(e) }>
                <div className='n-container' >
                    <div className='n-wrapper'>
                        <div className='n-sideNav'>
                        </div>
                        <div className='n-topNav'>
                        <div className='g-f n-messageContainer'>Lets Talk</div>
                            <div className='g-f n-home'>
                                <div className='n-homeNav' style={{ marginLeft: '1em'}} onClick={ (e) => this.handleJump(1) }>About</div>
                                <div className='n-homeNav' style={{ marginLeft: '1em'}} onClick={ (e) => this.handleJump(2) }>Portfolio</div>
                                <div className='n-homeNav' style={{ marginLeft: '1em'}} onClick={ (e) => this.handleJump(3) }>Contact</div>
                            </div>
                        </div>
                        <div className='n-sideNav'>
                        <div className='n-barNav'>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Pages.About position={ this.state.jumped }/>
                    <Pages.Projects position={ this.state.jumped }/>
                    <Pages.Contact position={ this.state.jumped }/>
                </div>
            </div>
        )
    }
}
