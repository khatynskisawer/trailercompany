import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  parseOffset(timezone) {
    if (!timezone) return 0;

    const match = timezone.match(/^([+-])(\d{1,2}):?(\d{2})?$/);
    if (!match) return 0;

    const sign = match[1] === '+' ? 1 : -1;
    const hours = parseInt(match[2], 10);
    const minutes = match[3] ? parseInt(match[3], 10) : 0;

    return sign * (hours * 60 + minutes) * 60 * 1000;
  }

  render() {
    const { format = '24', timezone } = this.props;
    const { currentTime } = this.state;

    const offsetMs = this.parseOffset(timezone);
    const targetTime = new Date(currentTime.getTime() + offsetMs);

    let hours = targetTime.getUTCHours();
    const minutes = targetTime.getUTCMinutes();
    const seconds = targetTime.getUTCSeconds();

    let period = '';
    let displayHours = hours;

    if (format === '12') {
      period = hours >= 12 ? ' PM' : ' AM';
      displayHours = hours % 12 || 12;
    }

    const timeString = `${displayHours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${period}`;

    return (
      <div style={{ fontSize: '2rem', fontFamily: 'monospace', textAlign: 'center' }}>
        {timeString}
        {timezone && (
          <div style={{ fontSize: '0.8rem', marginTop: '8px' }}>
            {timezone}
          </div>
        )}
      </div>
    );
  }
}