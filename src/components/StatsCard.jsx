import "../styles/components.css";

function StatsCard({ label, value }) {
  return (
    <div
      className="card stat"
      role="group"                
      aria-label={label}           
      title={`${label}: ${value}`} 
    >
      <span>{label}</span><br></br>
      <strong>{value ?? 0}</strong> 
    </div>
  );
}

export default StatsCard;
