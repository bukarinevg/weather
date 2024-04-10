function Error({ error }) {
  let text = 'Error';
  switch (error.status) {
    case 404:
      text = 'Location not found';
      break;
    case 500:
      text = 'Try request again in a minute';
      break;
  }
  return (
    <div className="alert alert-danger" role="alert">
      {text} {error.status}
    </div>
  );
}

export default Error;