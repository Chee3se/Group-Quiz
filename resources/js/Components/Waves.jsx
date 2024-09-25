const Waves = () => {
    var colors = [
        '#e5a9ff',
        '#ffec9a',
    ];
    return (
        <div className="waves-container static w-full h-full overflow-hidden pointer-events-none">
            <div style={{ background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})` }} className="absolute top-0 left-0 w-full h-[60%] -z-10"></div>
            <svg className="absolute top-[60%] left-0 w-full h-48 rotate-180 -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: colors[1], stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: colors[0], stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,95,1113,134.29,1200,67.53V120Z" opacity=".25" className="fill-[url(#waveGradient)]"></path>
                <path d="M0,120V104.19C13,83.08,27.64,63.14,47.69,47.95,99.41,8.73,165,8.73,224.58,28.17c31.15,10.15,60.09,26.07,89.67,39.8,40.92,19,84.73,46,130.83,49.67,36.26,2.85,70.9-9.42,98.6-31.56,31.77-25.39,62.32-62,103.63-73,40.44-10.79,81.35,6.69,119.13,24.28s75.16,39,116.92,43.05c59.73,5.85,113.28-22.88,168.9-38.84,30.2-8.66,59-6.17,87.09,7.5,22.43,10.89,48,26.93,60.65,49.24V120Z" opacity=".5" className="fill-[url(#waveGradient)]"></path>
                <path d="M0,120V114.37C149.93,60,314.09,47.68,475.83,76.43c43,7.64,84.23,20.12,127.61,26.46,59,8.63,112.48-12.24,165.56-35.4C827.93,42.78,886,24.76,951.2,30c86.53,7,172.46,45.71,248.8,84.81V120Z" className="fill-[url(#waveGradient)]"></path>
            </svg>
        </div>
    );
};

export default Waves;
