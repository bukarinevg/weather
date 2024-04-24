function Error({ error }) {
  let text = 'Error';
  switch (error) {
    case 404:
      text = 'Location not found';
      break;
    case 500:
      text = 'Try request again in a minute(too many requests to third-party api)';
      break;
    default:
      text= 'Check access to website without firewall(another nework)'
      break;
    }
  return (
    <div className="alert alert-danger" role="alert">
      {text} {error}
    </div>
  );
}

export default Error;