function MyClockTime() {
 let today = new Date();
 today = today.toLocaleString();
 return (
  <>
  <p>
  현재 시각: {today}
  </p>
  </>
 );
}

export default MyClockTime;