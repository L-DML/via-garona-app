// Not used in the app yet
import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    // return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
    return <Text {...this.props} style={this.props.style} />;
  }
}
