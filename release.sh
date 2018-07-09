echo "execute webpack packing......"
rm -rf output
npm run build
echo "webpack done ! "
tar -zcvf output.tar.gz ./output
rm -rf output
mkdir output
mv output.tar.gz ./output
echo "build done ! "
