import { useNavigate } from 'react-router-dom';

const BackHome = () => {
  const navigate = useNavigate();

  return (
    <button className="absolute top-2 left-2 border border-slate-400 text-black px-3 py-1 rounded-lg" onClick={() => navigate('/')}>
      back
    </button>
  );
};

export default BackHome;
