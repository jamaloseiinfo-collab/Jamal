import Head from 'next/head'; import Link from 'next/link';
export default function Layout({title='FixFind',children}:{title?:string,children:any}){
  return (<>
    <Head><title>{title}</title></Head>
    <header style={{position:'sticky',top:0,background:'#ffffffcc',borderBottom:'1px solid #eee'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:10}}><img src="/logo.png" alt="FixFind logo" style={{height:36,width:36,borderRadius:14,objectFit:'cover',border:'1px solid #cdebd8'}}/><strong>FixFind</strong></Link>
        <nav style={{display:'flex',gap:16,fontSize:14}}><Link href="/verify-face">Verify</Link></nav>
      </div>
    </header>
    <main>{children}</main>
    <footer style={{borderTop:'1px solid #eee'}}><div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 0',fontSize:14}}><div style={{display:'flex',alignItems:'center',gap:8}}><img src="/logo.png" alt="FixFind logo" style={{height:24,width:24,borderRadius:8,objectFit:'cover',border:'1px solid #cdebd8'}}/><span className="muted">© {new Date().getFullYear()} FixFind (Pty) Ltd</span></div></div></footer>
  </>);
}
