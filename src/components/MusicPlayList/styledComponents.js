import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const ArtistBg = styled.div`
  background-image: url(
    'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png'
  );
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`
export const ArtistName = styled.h1`
  font-weight: 600;
  font-size: 45px;
  font-family: 'roboto';
`
export const ArtistInfo = styled.p`
  font-size: 34px;
  font-weight: 400;
  font-family: 'roboto';
`
export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`
export const PlayListHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-family: 'roboto';
  color: #ffff;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 18px;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongText = styled.p`
  font-size: 32px;
  font-weight: bold;
  font-family: 'roboto';
`
