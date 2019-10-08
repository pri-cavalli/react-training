import React, { Component } from "react";
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { Link } from "react-router-dom";


export class InitialPage extends Component {
	render() {
		return (
      <FlexBox direction="Column" alignItems="Center">
        <Link to="/task-list">
          <Button design="Default">
            List
          </Button>
        </Link>
        <Link to="/counter">
          <Button design="Emphasized">
            Counter
          </Button>
        </Link>
      </FlexBox>
		);
	}
}