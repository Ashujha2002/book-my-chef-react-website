function Container({children}){
    return(
        <div className={`mx-auto my-15 border border-white px-4 py-10 md:w-6/10 rounded-md shadow-lg shadow-gray-500/50`}>
            {children}
        </div>
    );
}

export default Container;