
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getBookDetail } from '../../services/bookService';

const PDFViewer = () => {
  const params = useParams();
  const [bookDetail,setBookDetail] = useState({});
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchApi = async (id) => {
          const result = await getBookDetail(id);
          setBookDetail(result);
          setLoading(false); // Chỉ hiển thị PDF khi API đã hoàn tất
      };
      fetchApi(params.id);
  }, [params.id]);
  
  return (
      <div className='w-full h-full flex justify-center mb-9 mt-[-48px]'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
              <div style={{ height: '750px', width:'100%', display:'flex', justifyContent:'center'}}>
                  {!loading && bookDetail.pdf_url ? (
                      <Viewer
                          fileUrl={bookDetail.pdf_url}
                          plugins={[defaultLayoutPluginInstance]}
                          defaultScale={1.1} 
                      />
                  ) : (
                      <p>Loading PDF...</p>
                  )}
              </div>
          </Worker>
      </div>
  );
};

export default PDFViewer;
